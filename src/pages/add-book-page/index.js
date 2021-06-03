import React from 'react'
import TypographyColoredHeading from '../../components/typography-colored-heading'
import InputText from '../../components/input-text'
import InputTextArea from '../../components/input-text-area'
import InputLabel from '../../components/input-label'
import './index.css'
import InputButton from '../../components/input-button'

const AddBookPage = () => (
  <main className='add-book-page'>
    <TypographyColoredHeading text='Add a new book'/>
    <InputLabel text='Name'/>
    <InputText/>
    <InputLabel text='Author'/>
    <InputText/>
    <InputLabel text='Description'/>
    <InputTextArea rows={20}/>
    <InputButton placeholder='Add new book'/>
  </main>
)

export default AddBookPage
