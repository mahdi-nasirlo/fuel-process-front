"use client"

import {Button, Divider, Form, Layout, Modal, Tag, Typography} from "antd";
import ThemeRegistry from "@/lib/ThemeRegistry";
import Dragger from "antd/lib/upload/Dragger";
import Search from "antd/lib/input/Search";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import {useState} from "react";

function Page() {

    const router = useRouter()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ThemeRegistry>
                <Layout className="h-[100vh] w-full px-3">
                    <Typography className="text-center mt-3"> اسکن بارکد </Typography>

                    <div>
                        <Form
                            name="login"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                            style={{maxWidth: 600}}
                            initialValues={{remember: true}}
                            autoComplete="off"
                        >
                            <div className="w-full h-1/2 flex items-center bg-white drop-shadow-sm rounded mt-2">
                                <Dragger className="w-full h-full rounded">
                                    <p className="ant-upload-text">فعال سازی دوربین</p>
                                </Dragger>
                            </div>
                            <Divider>
                                یا
                            </Divider>
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
                        <Button className="w-full" type="primary" size="large" onClick={showModal}>
                            مرحله بعد
                        </Button>
                    </div>
                </Layout>

                <Modal title="کد با موفقیت دریافت شد" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div>
                        <Tag color="processing">کد: 234354</Tag>
                    </div>
                    فراید با موفقیت انجام شد لطفا کد را روی نازل وارد کنید
                </Modal>
            </ThemeRegistry>
        </>
    );
}

export default Page;