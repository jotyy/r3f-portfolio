'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '@/styles'
import { EarthCanvas } from '@/components/canvas'
import { SectionWrapper } from '@/hoc'
import { slideIn } from '@/utils/motion'
import { env } from 'env.mjs'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    // validate
    if (!form.name || !form.email || !form.message) {
      setLoading(false)
      alert('Please fill in all fields.')
      return
    }

    emailjs
      .send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Joshua Lee',
          from_email: form.email,
          to_email: 'jotyy318@gmail.com',
          message: form.message,
        },
        env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)

          alert('Ahh, something went wrong. Please try again.')
        },
      )
  }

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] rounded-2xl bg-dark/20 p-8'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              className='rounded-lg border-none bg-darkest px-6 py-4 font-medium text-white outline-none placeholder:text-light'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Your email'
              className='rounded-lg border-none bg-darkest px-6 py-4 font-medium text-white outline-none placeholder:text-light'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your message here'
              className='rounded-lg border-none bg-darkest px-6 py-4 font-medium text-white outline-none placeholder:text-light'
            />
          </label>

          <button
            type='submit'
            className='w-fit rounded-xl bg-darkest px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
