import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img src={offer}
        width={773}
        height={687}
        className="object-contain w-full"/>
        
        </div>
        <div className="flex flex-1 flex-col">
    

        <h2 className='font-palanquin lg:max-w-lg text-4xl capitalize font-bold'>
          <span className='text-coral-red'> Special
          </span> Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. 
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.

        </p>
        <p className='mt-6 lg:max-w-lg info-text'> 
          Navigate a realm of possibilities designed to fulfil your unique desires, surpassing your loftiest expectations.
          Your journey with us is boundless, and we look forward to embarking on it together.
        </p>

      <div className='mt-11 flex flex-wrap gap-4'>
        <Button label='View Details'/>
        <Button
        label="Learn more"
        backgroundColor = "bg-white"
        borderColor = 'border-slate-gray'
        textColor='text-slate-gray'
        />
      </div>
        </div>

    </section>
  )
}

export default SpecialOffers