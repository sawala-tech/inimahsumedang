import buttonCss from '../styles/modules/button.module.scss'
export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
        <button className={buttonCss.bgred}>Anjay</button>
      </div>
    </div>
  )
}