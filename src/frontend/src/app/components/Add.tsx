import Image from 'next/image'

export default function AddTaskButton() {
    return (
        <a href='/add'>
            <button className="flex justify-center items-center bg-black rounded-full w-16 h-16 absolute right-16 bottom-16 hover:scale-110 ease-in-out duration-200">
                <Image src="/plus.svg" alt="Adicionar tarefa" width={24} height={64}/>
            </button>
        </a>
    )
}   