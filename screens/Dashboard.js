import React from 'react'
import Background from '../components/Background'
import Logo from '../components/img'
import Header from '../components/Header'
import Paragraph from '../components/Para'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome</Header>
      <Paragraph>
          Logged in
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  )
}