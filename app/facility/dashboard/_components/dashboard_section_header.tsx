export default function DashboardSectionHeader({title, description}: {title: string, description: string}){
    return <div className="flex flex-row justify-between px-5 ps-0">
        <div className="flex flex-col gap-1 ">
        <span className="text-primary text-4xl">
            {title}
        </span>
        <span className="text-secondary text-sm">
            {description}
        </span>
        </div>
    </div>
}