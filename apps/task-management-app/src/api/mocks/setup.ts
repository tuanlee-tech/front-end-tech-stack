// File: src/api/mocks/setup.ts
let isMSWInitialized = false;

export async function setupMSW() {
    if (isMSWInitialized || process.env.NODE_ENV !== 'development') {
        return;
    }
    const { worker } = await import('./browser');
    await worker.start();
    isMSWInitialized = true;
}

// Khởi động ngay khi module được tải
setupMSW();