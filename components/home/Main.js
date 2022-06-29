import { useEffect, useState } from "react"

export default function Main() {
    const [categories, setCategories] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [data, setData] = useState({})

    useEffect(() => {
        async function getAndSetCategories() {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            const meals = await res.json()
            setCategories(meals.meals)
        }
        async function getAndSetIngredients() {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            const meals = await res.json()
            setIngredients(meals.meals)
        }
        getAndSetCategories()
        getAndSetIngredients()
    }, [])

    const categoryOptions = categories.map(category => {
        return <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
    })

    const ingredientOptions = ingredients.map(ingredient => {
        return (
            <div key={ingredient.idIngredient} className="flex grow">
                <input className="hidden" type="checkbox" name="ingredients" id={ingredient.strIngredient.toLowerCase()} />
                <label className="bg-black text-white rounded-full py-2 px-6 w-full text-center" htmlFor={ingredient.strIngredient.toLowerCase()}>{ingredient.strIngredient}</label>
            </div>
        )
    })

    return (
        <main className="flex flex-col items-center relative px-16 mt-16">
            <h2 className="text-white text-xl">Already have something in mind?</h2>
            <form className="w-full max-w-[500px] mt-2 flex">
                <input className="rounded-l-full w-full px-6 py-3 bg-white" type="text" placeholder="Search" />
                <button className="rounded-r-full text-white bg-black px-6">Go</button>
            </form>
            <h2 className="text-white text-xl mt-6">No? How about a category?</h2>
            <form className="w-full max-w-[500px] mt-2 flex">
                <select className="rounded-l-full w-full px-6 py-3 bg-white" name="" id="">
                    {categoryOptions}
                </select>
                <button className="rounded-r-full text-white bg-black px-6">Go</button>
            </form>
            <h2 className="text-white text-xl mt-6">Perhaps you have some ingredients on hand?</h2>
            <form className="w-full max-w-[500px] mt-2 flex flex-col">
                <div className="bg-white p-6 rounded-t-3xl flex flex-wrap gap-2">
                    {ingredientOptions}
                </div>
                <button className="rounded-b-3xl text-white bg-black py-3">Go</button>
            </form>
        </main>
    )
}