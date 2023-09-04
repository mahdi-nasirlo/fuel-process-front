"use client"

import {Layout, Typography} from "antd";
import ThemeRegistry from "@/lib/ThemeRegistry";

function Page() {


    return (
        <>
            <ThemeRegistry>
                <Layout className="h-[100vh] w-full px-3">
                    <Typography className="text-center mt-3"> اسکن بارکد </Typography>
                    <div className="w-full h-1/2 flex items-center bg-white drop-shadow-sm rounded mt-2">
                        <Typography style={{color: "#5C6CFC"}} className="w-full text-2xl font-medium text-center">
                            فعال سازی دوربین
                        </Typography>
                    </div>
                    {/*<div>*/}
                    {/*    <div className="mb-6">*/}
                    {/*        <span>رمز یکبار مصرف به شماره 09123456789 پیامک شد</span>*/}
                    {/*    </div>*/}
                    {/*    <Form*/}
                    {/*        name="basic"*/}
                    {/*        labelCol={{span: 8}}*/}
                    {/*        wrapperCol={{span: 16}}*/}
                    {/*        style={{maxWidth: 600}}*/}
                    {/*        initialValues={{remember: true}}*/}
                    {/*    >*/}
                    {/*        <Form.Item*/}
                    {/*            label="رمز ارسال شده"*/}
                    {/*            name="otpCode"*/}
                    {/*            rules={[{required: true, message: 'لطفا رمز یکبار مصرف را وارد کنید'}]}*/}
                    {/*        >*/}
                    {/*            <Input size="large"/>*/}
                    {/*        </Form.Item>*/}

                    {/*        <Form.Item>*/}
                    {/*            <Button size="large" className="w-full mt-5" type="primary" htmlType="submit">*/}
                    {/*                ورود*/}
                    {/*            </Button>*/}
                    {/*        </Form.Item>*/}
                    {/*    </Form>*/}
                    {/*</div>*/}
                </Layout>
            </ThemeRegistry>
        </>
    );
}

export default Page;