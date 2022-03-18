import type {NextPage} from 'next'
import Head from 'next/head'
import {styled} from "@stitches/react";
import RecipeFinder from "../components/recipe-finder/RecipeFinder";
import {theme} from "../stitches.config";

type HomeProps = { 
}

const Home: NextPage = styled((props: HomeProps) => {
      const { ...otherProps} = props;
      return (
        <div {...otherProps}>
          <Head>
            <title>Recipe Finder</title>
            <meta name="description" content="Recipe Finder" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <h1 className={"header"}>Recipe Finder</h1>
            <RecipeFinder/>
        </div>
      )
}, {
    
    maxWidth: '1080px',
    marginTop: theme.space[7],
    marginInline: theme.space[4],
    '@media (min-width: 1112px)': {
        marginInline: 'auto'
    },
    '.header': {
        fontSize: theme.fontSizes["2xl"],
        marginBottom: theme.space[5]
    }
});

export default Home
