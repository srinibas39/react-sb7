import "./Signup.css"

export const Signup = () => {
    return <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" data-testId="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" data-testId="password" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" data-testId="name" />
        <button data-testId="signupSubmit">Sign up</button>
        <select data-testId="cityBox">
            <option></option>
            <option>city 1</option>
            <option>city 2</option>
            <option>city 3</option>
        </select>
    </div>
}