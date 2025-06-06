import Image from "next/image";

export const Header: React.FC = () => {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt=""
                fill
                className="object-cover filter -z-10"
                sizes="100vw"
                priority
            />
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-600 to-transparent"
                aria-hidden="true"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Help Make a Difference
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                    These are some of the most important charities in the world.
                    They need your help to make a lasting impact on the world.
                </p>
            </div>
        </div>
    );
};
