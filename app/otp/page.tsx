"use client"

import {Button, Form, Input, Layout, Typography} from "antd";
import ThemeRegistry from "@/lib/ThemeRegistry";
import {useRouter} from "next/navigation";

function Page() {

    const router = useRouter()

    const onfinish = () => {
        router.push("/scanner")
    }

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
                        <div className="mb-6">
                            <span>رمز یکبار مصرف به شماره 09123456789 پیامک شد</span>
                        </div>
                        <Form
                            name="basic"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                            style={{maxWidth: 600}}
                            initialValues={{remember: true}}
                            onFinish={onfinish}
                        >
                            <Form.Item
                                label="رمز ارسال شده"
                                name="otpCode"
                                rules={[{required: true, message: 'لطفا رمز یکبار مصرف را وارد کنید'}]}
                            >
                                <Input size="large"/>
                            </Form.Item>

                            <Form.Item>
                                <Button size="large" className="w-full mt-5" type="primary" htmlType="submit">
                                    ورود
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Layout>
            </ThemeRegistry>
        </>
    );
}

export default Page;