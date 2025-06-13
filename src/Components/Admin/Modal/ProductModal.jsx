'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import AddProduct from '../../../Layout/Admin/Products/AddProduct'

export default function ProductModal({open, setOpen}) {

    let imageArray = ['/public/assets/Images/products/diamond.png','/public/assets/Images/products/diamond.png','/public/assets/Images/products/diamond.png','/public/assets/Images/products/diamond.png']
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"

      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-[80%] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
           <div className='w-full h-full bg-[white] p-8'>
            <AddProduct />
           </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
