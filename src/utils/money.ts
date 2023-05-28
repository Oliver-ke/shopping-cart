export const formatCurrency = ({amount = 0, currency='USD'}: {amount: number | undefined, currency?: string}): string => {
   const formatter =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    });
return formatter.format(amount)
}