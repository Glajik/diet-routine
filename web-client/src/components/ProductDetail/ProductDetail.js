import React from 'react'
import ProductWeight from './ProductWeight'
import { useParams } from 'react-router-dom'
import { Container } from '../UI'
import { useSelector } from 'react-redux'
import { useFirestore} from 'react-redux-firebase'
import { TopBarLayout } from '../../layouts'
import { ProductDetailContentWrapper } from './style'

const ProductDetail = () => {
  const { id } = useParams()
  const auth = useSelector(state => state.firebase.auth)
  const products = useSelector(state => state.firestore.data.products) || {}
  const {
    name,
    amountUnit,
    type,
    category,
  } = products[id]

  const firestore = useFirestore()

  const onSave = async (weight, totals ) => {
    await firestore.collection('Journal').add({
      author: auth.uid /* User.uid */,
      product: id /* Product.docId */,
      name,
      type,
      category,
      amount: weight, // Weight (in g) or volume in (ml)
      amountUnit,
      calories: totals.calories,
      proteins: totals.proteins,
      fats: totals.fats,
      carbohydrates: totals.carbohydrates,
      isDraft: true,
    })
  }

  return (
    <Container>
      <TopBarLayout title="addProduct">
        <ProductDetailContentWrapper>
          <ProductWeight product={products[id]} onSave={onSave}/>
        </ProductDetailContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default ProductDetail
