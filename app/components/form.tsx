"use client"

import {Button, Form, Input} from "antd";
import {useRouter} from "next/navigation";


function LoginForm() {

    const router = useRouter()

    const onFinish = () => {
        router.push("/otp");
    }

    return (
        <>
            <Form
                name="login"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="تلفن"
                    name="mobilNumber"
                    rules={[{required: true, message: 'لطفا شماره همراه را وارد کنید'}]}
                >
                    <Input size="large"/>
                </Form.Item>

                <Form.Item
                    label="کد ملی"
                    name="code"
                    rules={[{required: true, message: 'لطفا کد ملی را وارد کنید'}]}
                >
                    <Input size="large"/>
                </Form.Item>


                <Form.Item>
                    <Button size="large" className="w-full mt-5" type="primary" htmlType="submit">
                        ورود
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginForm;