import {Layout, Typography} from "antd";
import LoginForm from "@/app/components/form";
import ThemeRegistry from "@/lib/ThemeRegistry";

async function Page() {


    return (
        <>
            <ThemeRegistry>
                <Layout className="h-[100vh] w-full px-3">
                    <div className="w-full h-1/2 flex items-center">
                        <Typography className="w-full h-1/2 text-7xl font-bold text-center">
                            logo
                        </Typography>
                    </div>
                    <div>
                        <LoginForm/>
                    </div>
                </Layout>
            </ThemeRegistry>
        </>
    );
}

export default Page;