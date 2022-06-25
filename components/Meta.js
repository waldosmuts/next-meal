import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
        </Head>
    )
}

Meta.defaultProps = {
    title: "Next Meal",
    keyword: "meal",
    description: "Decide your next meal here"
}

export default Meta