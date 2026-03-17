
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    movil: '',
    empresa: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!gdprAccepted) {
      toast({
        title: 'Consentimiento requerido',
        description: 'Debes aceptar la política de protección de datos para enviar el formulario.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      toast({
        title: 'Campos obligatorios',
        description: 'Por favor completa nombre, email y mensaje.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hola, me llamo ${formData.nombre.trim()}.\n` +
      `Email: ${formData.email.trim()}\n` +
      (formData.telefono.trim() ? `Teléfono: ${formData.telefono.trim()}\n` : '') +
      (formData.movil.trim() ? `Móvil: ${formData.movil.trim()}\n` : '') +
      (formData.empresa.trim() ? `Empresa: ${formData.empresa.trim()}\n` : '') +
      `\nMensaje: ${formData.mensaje.trim()}`
    );

    const link = document.createElement('a');
    link.href = `https://wa.me/34654942720?text=${message}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: '¡Mensaje preparado!',
      description: 'Se ha abierto WhatsApp con tu mensaje. ¡Gracias por contactarnos!',
    });

    setIsSubmitting(false);
    setFormData({ nombre: '', email: '', telefono: '', movil: '', empresa: '', mensaje: '' });
    setGdprAccepted(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#667eea]/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Contacta
            </span>{' '}
            con Nosotros
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y te ayudamos a encontrar la mejor solución tecnológica para tu negocio.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Teléfono / WhatsApp</p>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#667eea] transition-colors">
                    +34 654 94 27 20
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:info@robotsconsultant.net" className="text-gray-400 hover:text-[#667eea] transition-colors">
                    info@robotsconsultant.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Ubicación</p>
                  <p className="text-gray-400">RobotAdvisors OÜ</p>
                  <p className="text-gray-400 text-sm">Estonia · Registrikood: 17425904</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-2">Envíanos un Mensaje</h2>
                <p className="text-gray-400 text-sm mb-6">Los campos marcados con * son obligatorios.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-gray-300">Nombre *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      maxLength={100}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      maxLength={255}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-300">Teléfono Fijo</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 900 000 000"
                      maxLength={20}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="movil" className="text-gray-300">Teléfono Móvil</Label>
                    <Input
                      id="movil"
                      name="movil"
                      type="tel"
                      value={formData.movil}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      maxLength={20}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-gray-300">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    maxLength={100}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-gray-300">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    maxLength={1000}
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#667eea]"
                    required
                  />
                </div>

                {/* GDPR Consent */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-[#667eea]" />
                    <h3 className="text-white font-semibold">Protección de Datos (RGPD)</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdpr"
                      checked={gdprAccepted}
                      onCheckedChange={(checked) => setGdprAccepted(checked as boolean)}
                      className="mt-1 border-white/30 data-[state=checked]:bg-[#667eea] data-[state=checked]:border-[#667eea]"
                    />
                    <Label htmlFor="gdpr" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
                      Acepto la{' '}
                      <Link to="/politica-privacidad" className="text-[#667eea] hover:underline" target="_blank">
                        Política de Privacidad
                      </Link>{' '}
                      y consiento el tratamiento de mis datos personales para gestionar mi consulta. 
                      Responsable: RobotAdvisors OÜ. Finalidad: atender tu solicitud. 
                      Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad en{' '}
                      <a href="mailto:info@robotsconsultant.net" className="text-[#667eea] hover:underline">
                        info@robotsconsultant.net
                      </a>.
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !gdprAccepted}
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 h-12 text-lg disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje por WhatsApp'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario se abrirá WhatsApp con tu mensaje preparado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
