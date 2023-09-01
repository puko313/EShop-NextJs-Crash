import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
//ApolloClient is used to communicate with the server
//ApolloProvider is used to wrap the whole app with the client
// InMemoryCache is used to store the data in the client
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from "@apollo/client";

//we creat it and send it to the whole app through the provider
const client = new ApolloClient({
uri: 'http://localhost:1337/graphql',
cache: new InMemoryCache()



});

 const Layout = ({children}) => {
    return ( <> 
        <Nav /><ApolloProvider client={client}>
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Hello there</h1>
                
                <Header />
                {children}
            </main>
        </div></ApolloProvider>
        </> )
}
export default Layout