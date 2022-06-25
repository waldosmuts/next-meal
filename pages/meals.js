import Meta from "../components/Meta"

export default function Meals({ categories }) {
    const categoryElements = categories.categories.map(category => {
        return (
            <div className="px-6 py-3 bg-black text-white rounded text-center relative overflow-hidden" key={category.idCategory}>
                <img className="absolute w-full scale-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur pointer-events-none" src={category.strCategoryThumb} alt="" />
                <span className="z-10 relative">{category.strCategory}</span>
            </div>
        )
    })

    return (
        <>
            <Meta title="Meals" />
            <div className="grid grid-cols-3 gap-6 p-12">
                {categoryElements}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const categories = await res.json()

    return {
        props: {
            categories
        }
    }
}