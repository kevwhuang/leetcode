// 831 - Masking Personal Information

function maskPII(s) {
    const index = s.indexOf('@');
    if (index !== -1) {
        return `${s[0]}*****${s[index - 1]}@${s.slice(index + 1)}`.toLowerCase();
    } else {
        s = s.replace(/\D/g, '');
        switch (s.length) {
            case 10: return `***-***-${s.slice(-4)}`;
            case 11: return `+*-***-***-${s.slice(-4)}`;
            case 12: return `+**-***-***-${s.slice(-4)}`;
            default: return `+***-***-***-${s.slice(-4)}`;
        }
    }
}
