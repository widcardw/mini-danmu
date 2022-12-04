import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import type { DanmuMsg } from 'blive-message-listener'

interface Props {
  data: DanmuMsg
}

export const Item: Component<Props> = ({ data }) => {
  return (
    <div my-3>
      <div class="uname" text="#66b395">{ data.user.uname }</div>
      <div class="content" text="truegray-300" mt-2>
      { data.emoticon ? (
        <img src={data.emoticon?.url} height={data.emoticon.height / 2} width={data.emoticon.width / 2} alt="" />
      ) : data.content }
      </div>
    </div>
  )
}