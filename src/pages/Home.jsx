import bannerImg from '../assets/images/bank-tree.webp'
import Feature from '../components/Feature.jsx'

const features = [
  {
    image: 'src/assets/icons/icon-chat.webp',
    imageDesc: 'Chat Icon',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    image: 'src/assets/icons/icon-money.webp',
    imageDesc: 'Money Icon',
    title: 'More savings means higher rates',
    description:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    image: 'src/assets/icons/icon-security.webp',
    imageDesc: 'Security Icon',
    title: 'Security you can trust',
    description:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

const Home = () => {
  return (
    <>
      <section id="hero">
        <img className="hero-img" src={bannerImg} alt="banner" />
        <div className="hero-content">
          <div>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
          </div>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section id="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              image={feature.image}
              imageDesc={feature.imageDesc}
              title={feature.title}
              description={feature.description}
            />
          )
        })}
      </section>
    </>
  )
}

export default Home
