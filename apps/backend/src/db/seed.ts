import { db } from "./index";
import { automations } from "./schema/automations";

async function main() {
  console.log("🌱 Seeding database...");

  const data = [
    {
      name: "Daily Backup",
      description: "Daily backup of the server files",
      isActive: true,
      createdAt: new Date(),
    },
    {
      name: "Log Cleanup",
      description: "Remove logs older than 30 days",
      isActive: false,
      createdAt: new Date(),
    },
  ];

  await db.insert(automations).values(data);

  console.log("✅ Seed finished successfully!");
}

main().catch(console.error);
