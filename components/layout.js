export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
        <p>Powered by Next.js, Swell, and Netlify </p>
        <span>|</span>
        <a
          href="https://github.com/Arckain-sys/bike-ecommerce"
          className="font-medium text-red-500 hover:text-red-600"
        >
          Source code
        </a>
      </footer>
    </>
  )
}
