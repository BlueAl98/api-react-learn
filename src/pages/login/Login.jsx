
function LoginComponent() {
    return ( 
      <div className="bg-sky-100 flex justify-center items-center h-screen">
      {/* Left image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://marketplace.canva.com/EAGTFvtoJBA/1/0/1600w/canva-white-and-blue-futuristic-background-instagram-post-dtk7uL9YRm0.jpg"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right login form */}
      <div className="bg-white w-full lg:w-1/2 h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">Login</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sky-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account? <a href="#" className="text-sky-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default LoginComponent;