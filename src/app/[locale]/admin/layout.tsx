import { Fixed } from "@/layouts";
import { FC, ReactNode } from "react";

interface AdminLayoutProps {
    children:ReactNode
}
 
const AdminLayout =async ({children}:AdminLayoutProps) => ( 
        <Fixed>
        {children}
        </Fixed>
     )
 
export default AdminLayout;