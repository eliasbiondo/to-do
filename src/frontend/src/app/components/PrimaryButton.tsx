export default function PrimaryButton({children, onClick} : {children: React.ReactNode, onClick: () => void}) {
    return (
        <button className="h-16 w-48 text-base text-white 
                         bg-black rounded-[3px] hover:scale-110 ease-in-out duration-200">
            {children}
        </button>
    )
}