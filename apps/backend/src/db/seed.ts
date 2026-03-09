import { db } from "./index";
import { automationRuns, automations, closedPositions, closedPositionsRuns } from "./schema";

async function main() {
  console.log("🌱 Seeding database...");

  // Insert Automations
  const automationsData = [
    {
      name: "Closed Positions",
      description: "Automated process to close positions based on predefined criteria",
      isActive: true,
      createdAt: new Date(),
    },
    {
      name: "Daily Backup",
      description: "Daily backup of the server files",
      isActive: false,
      createdAt: new Date(),
    },
  ];

  const insertedAutomations = await db.insert(automations).values(automationsData).returning();
  const cpAutomation = insertedAutomations.find(a => a.name === "Closed Positions");

  if (cpAutomation) {
    // Insert some runs for "Closed Positions"
    const runsData = [
      {
        automationId: cpAutomation.id,
        status: "SUCCESS" as const,
        startedAt: new Date(Date.now() - 3600000 * 24), // 1 day ago
        finishedAt: new Date(Date.now() - 3600000 * 24 + 60000), 
        durationMs: 60000,
        summary: "Processed 5 positions successfully",
        createdAt: new Date(),
      },
      {
        automationId: cpAutomation.id,
        status: "FAILED" as const,
        startedAt: new Date(Date.now() - 3600000 * 48), // 2 days ago
        finishedAt: new Date(Date.now() - 3600000 * 48 + 15000),
        durationMs: 15000,
        errorMessage: "Network timeout while fetching positions",
        summary: "Failed to connect to provider",
        createdAt: new Date(),
      }
    ];

    const insertedRuns = await db.insert(automationRuns).values(runsData).returning();
    const successRun = insertedRuns.find(r => r.status === "SUCCESS");

    if (successRun) {
      // Insert closed positions run metrics
      const [cpRun] = await db.insert(closedPositionsRuns).values({
        automationRunId: successRun.id,
        positionsClosed: 3,
        totalApplications: 45
      }).returning();

      // Insert actual closed positions
      await db.insert(closedPositions).values([
        {
          runId: cpRun.id,
          title: "Senior Software Engineer",
          requisition: "REQ-001",
          location: "Remote",
          postedDate: "2024-02-01",
          closedDate: "2024-03-01",
          applicationsCount: 25
        },
        {
          runId: cpRun.id,
          title: "Product Manager",
          requisition: "REQ-002",
          location: "New York",
          postedDate: "2024-02-15",
          closedDate: "2024-03-05",
          applicationsCount: 12
        },
        {
          runId: cpRun.id,
          title: "UX Designer",
          requisition: "REQ-003",
          location: "London",
          postedDate: "2024-01-20",
          closedDate: "2024-03-10",
          applicationsCount: 8
        }
      ]);
    }
  }

  console.log("✅ Seed finished successfully!");
}

main().catch(console.error);
