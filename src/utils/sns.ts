export const getSnsShareUrl = (sns: string, path?: string, title?: string): string => {

  const url = `https://moriagetai.samemachi.org${path}`
  const shareTitle = title ?? ''

  switch (sns) {
    case 'line':
      return `https://social-plugins.line.me/lineit/share?url=${url}`
    case 'twitter':
      return `https://twitter.com/share?&text=${shareTitle.replaceAll(' ', '%20')}%0a${url}%0a&hashtags=勝手に鮫町盛り上げ隊,青森県,八戸市,鮫町`
    case 'fb':
      return `http://www.facebook.com/share.php?u=${url}`
    default:
      return ''
  }
}