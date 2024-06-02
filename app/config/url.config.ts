export const ADMIN_PANEL_URL = '/admin'

export const getSiteUrl = () => process.env.APP_URL as string

export const getAdminPanelUrl = (path = '') => `${ADMIN_PANEL_URL}${path}`