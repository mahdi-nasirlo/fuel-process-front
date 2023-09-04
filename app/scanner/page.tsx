"use client"

import {Divider, Form, Layout, Typography} from "antd";
import ThemeRegistry from "@/lib/ThemeRegistry";
import Dragger from "antd/lib/upload/Dragger";
import Search from "antd/lib/input/Search";
import {ArrowLeftOutlined} from "@ant-design/icons";

function Page() {


    return (
        <>
            <ThemeRegistry>
                <Layout className="h-[100vh] w-full px-3">
                    <Typography className="text-center mt-3"> اسکن بارکد </Typography>
                    <div className="w-full h-1/2 flex items-center bg-white drop-shadow-sm rounded mt-2">
                        <Dragger className="w-full h-full rounded">
                            <p className="ant-upload-text">فعال سازی دوربین</p>
                        </Dragger>
                    </div>
                    <Divider>
                        یا
                    </Divider>
                    <div>
                        <Form
                            name="login"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                            style={{maxWidth: 600}}
                            initialValues={{remember: true}}
                            autoComplete="off"
                        >
                            <Form.Item

                                label="کد روی نازل را در اینجا بنویسید"
                                name="mobilNumber"
                                rules={[{required: true, message: 'کد روی نازل را کنید '}]}
                            >
                                <Search
                                    placeholder="*********"
                                    allowClear
                                    enterButton={<ArrowLeftOutlined/>}
                                    size="large"
                                />
                            </Form.Item>

                        </Form>
                    </div>
                </Layout>
            </ThemeRegistry>
        </>
    );
}

export default Page;