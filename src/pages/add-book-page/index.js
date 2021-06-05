import React from 'react'
import TypographyColoredHeading from '../../components/typography-colored-heading'
import InputText from '../../components/input-text'
import InputTextArea from '../../components/input-text-area'
import InputLabel from '../../components/input-label'
import InputButton from '../../components/input-button'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import api from '../../services/api'
import './index.css'

const AddBookPage = () => {
  const [name, nameInput] = InputText({ name: 'name', placeholder: '' })
  const [author, authorInput] = InputText({ name: 'author', placeholder: '' })
  const [description, descriptionInput] = InputTextArea({ name: 'description', placeholder: '', rows: 5 })

  const onSubmit = async () => {
    if (name && author && description) {
      create({ name, author, description })
      window.location.reload()
    }
  }

  const create = async ({ name, author, description }) => {
    await api.post('/books', {
      name: name,
      author: author,
      description: description
    })
  }

  return (
    <main className='add-book-page'>
      <TypographyColoredHeading text='Add a new book'/>
      <InputLabel text='Name'/>
      {nameInput}
      <InputLabel text='Author'/>
      {authorInput}
      <InputLabel text='Description'/>
      {descriptionInput}
      <InputButton onClick={onSubmit} placeholder='Add new book'/>
      <NavigationBottomBar/>
    </main>
  )
}

export default AddBookPage
