


import DashboardLayout from '@/components/dashboard/dashboard-layout'
import DashboardContent from '@/components/dashboard/dashboard-content'

export const metadata = {
  title: 'Личный кабинет - UPAK',
  description: 'Управляйте своими карточками товаров и заказами в личном кабинете UPAK'
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  )
}
