import { NextPage } from 'next'
import NodeList from '../components/view/nodeView'
/**
 * node形式でシナリオの構造を可視化する
 */
const ViewPage:NextPage = () => {
  return (
      <div>
        <NodeList />
      </div>
  )
}

export default ViewPage
