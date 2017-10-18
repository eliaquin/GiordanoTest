using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GiordanoTest.Startup))]
namespace GiordanoTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
