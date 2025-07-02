function AuthorizedLayout({children}) {
    return (
        <div>
            <h1>You are Authorized</h1>
            {children}
        </div>
    );
}

export default AuthorizedLayout;
