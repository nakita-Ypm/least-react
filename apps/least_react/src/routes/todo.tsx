import { createFileRoute } from '@tanstack/react-router'
import Todo from '@/components/Todo'

export const Route = createFileRoute('/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Todo />
}
