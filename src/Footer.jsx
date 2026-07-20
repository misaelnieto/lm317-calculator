export default function SiteFooter() {
    return (
        <footer className="flex flex-col items-center bg-stone-200 text-center text-white dark:bg-stone-600">
            <div className="w-full bg-stone-300 p-4 text-center text-neutral-700 dark:bg-stone-700 dark:text-neutral-200">
                <a className="text-neutral-800 dark:text-neutral-400" href="https://noenieto.com/">Copyright © {new Date().getFullYear()} Noe Nieto</a>
            </div>
            <div className="w-full bg-stone-300 p-4 text-center text-neutral-700 dark:bg-stone-700 dark:text-neutral-200">
                <a className="m-3" href="https://noenieto.com/">My website</a>
                <a className="m-3" href="https://blog.noenieto.com">My blog</a>
                <a className="m-3" href="https://noenieto.com/demos">More demos</a>
                <a className="m-3" href="https://github.com/misaelnieto">My Github</a>
                <a className="m-3" href="https://www.linkedin.com/in/noe-nieto/">My LinkedIn</a>
            </div>
        </footer>
    );
}