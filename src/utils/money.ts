export const formatCurrency = ({amount, currency='USD'}: {amount: number, currency?: string}): string => {
   const formatter =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    });
return formatter.format(amount)
}