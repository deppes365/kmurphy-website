export const getCurrentPage = () => {
    const currentPage = window.location.href;
    
    if(currentPage.includes('services')) {
        
        return 'services'
    } else if (currentPage.includes('about')) {
        
        return 'about'
    } else {
        
        return 'home'
    }
}