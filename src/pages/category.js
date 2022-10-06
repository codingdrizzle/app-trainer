import React from 'react'
import { useParams } from 'react-router-dom'
import Animals from '../components/home/animals'
import Fisheries from '../components/home/fisheries'
import Pests from '../components/home/pests'
import Plants from '../components/home/plants'
import Layout from '../layout'

const CategoryPage = () => {
  const { id } = useParams();
  return (
    <Layout navItems={['']}>

      {
        id === 'animals' && <Animals />
      }
      {
        id === 'plants' && <Plants />
      }
      {
        id === 'fisheries' && <Fisheries />
      }
      {
        id === 'pests' && <Pests />
      }
    </Layout >
  )
}

export default CategoryPage