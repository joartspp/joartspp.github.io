import Head from 'next/head';

const Header = ({tilePage}) => {
    return (
        <Head>
            {/* title is here */}
            <title> {tilePage} </title>
            <meta name='description' content='This is my resume created by Next.Js'/>
            <meta name='author' content='Supakorn Siridang <Joe>'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta property='og:type' content='website'/>
        </Head>
    )
};

export default Header;