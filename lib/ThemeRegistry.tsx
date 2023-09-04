import {ConfigProvider, ThemeConfig} from "antd";
import React from "react";

const theme: ThemeConfig = {
    token: {colorPrimary: "#5C6CFC"}
}

function ThemeRegistry({children}: { children: React.ReactNode }) {
    return (
        <ConfigProvider direction="rtl" theme={theme}>
            {children}
        </ConfigProvider>
    );
}

export default ThemeRegistry;