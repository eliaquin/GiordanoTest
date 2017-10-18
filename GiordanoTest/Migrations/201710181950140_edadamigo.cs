namespace GiordanoTest.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class edadamigo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Amigos", "Edad", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Amigos", "Edad");
        }
    }
}
