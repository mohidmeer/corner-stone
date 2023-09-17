import AppLayout from "@/layouts/AppLayout";

export default function Theme() {
    return (
      <AppLayout>
        <div className='flex flex-col items-center justify-center w-full bg-[#f6f6f6]'>
          <p className='font-bold text-3xl'>Typography</p>
          <div className='mt-10'>
              <h1 className="">A Quick Brown Fox Jumps Over Lazy Dog</h1>
              <h2>A Quick Brown Fox Jumps Over Lazy Dog</h2>
              <h3>A Quick Brown Fox Jumps Over Lazy Dog</h3>
              <h4>A Quick Brown Fox Jumps Over Lazy Dog</h4>
              <h5>A Quick Brown Fox Jumps Over Lazy Dog</h5>
              <h6>A Quick Brown Fox Jumps Over Lazy Dog</h6>
          </div>
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Text Normal</p>
              <p className='text-secondary'>
              Shelder Roofing & Retro-Fit group is a family-owned & operated business serving the greater San Fransisco. In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected over the coarse of the last 10 years.
              </p>
          </div>
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Text Light</p>
              <p className='text-light'>
              Shelder Roofing & Retro-Fit group is a family-owned & operated business serving the greater San Fransisco. In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected over the coarse of the last 10 years.
              </p>
          </div>
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Text Muted</p>
              <p className='text-muted'>
              Shelder Roofing & Retro-Fit group is a family-owned & operated business serving the greater San Fransisco. In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected over the coarse of the last 10 years.
              </p>
          </div>
         
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Inputs</p>
              <div className='flex justify-center gap-4'>
                  <input placeholder='Name'/>
                  <input placeholder='Email'/>
              </div>
          </div>
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Buttons</p>
              <div className='flex justify-center gap-4 w-full '>
                  <button className='w-full btn'>
                      Buttons
                  </button>
                  <button className='w-full btn-inv'>
                      Buttons
                  </button>
                
                  
              </div>
          </div>
          <div className='mt-10 max-w-6xl mx-auto'>
              <p className='font-bold text-2xl text-center'>Colors</p>
               <div className='flex gap-4'>
                  <div className='p-4 bg-primary text-white font-bold'>
                      PRIMARY
                  </div>
                  
                  <div className='p-4 bg-secondary  text-white font-bold'>
                      Secondary 
                  </div>
               </div>
          </div>
          
         
  
        </div>
  
       
  
      </AppLayout>
    )
  }
  