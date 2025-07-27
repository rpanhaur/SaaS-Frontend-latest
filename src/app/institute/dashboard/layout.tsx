

import InstituteDashboard from "@/lib/components/dashboard/page"


function InstituteDashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (

        <InstituteDashboard>
            {children}
        </InstituteDashboard>
    )
}
export default InstituteDashboardLayout