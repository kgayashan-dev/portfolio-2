const Contactme = () => {
  return (
    <section className="flex flex-col w-11/12  content-center m-auto my-10 mb-20 ">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <div className=" h-auto grid  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
        <div className="text-md text-justify m-10">
          <p>
       
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consequatur delectus quas voluptatibus maxime ullam magni ratione
            distinctio amet at sunt dolor, cum obcaecati ut reprehenderit
            mollitia, eaque aut quibusdam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo consequatur delectus quas
            voluptatibus maxime ullam magni ratione distinctio amet at sunt
            dolor, cum obcaecati ut reprehenderit mollitia, eaque aut quibusdam.
          </p>
        </div>
        <div className="text-lg text-justify m-10">
          <form action="#" className="space-y-8 text-xl">
            <div>
              <label
                htmlFor="email"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                // value={email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"
                placeholder="name@account.com"
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                // className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"

                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                // value={subject}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                // onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:text-white "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 bg-red-500 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contactme;
