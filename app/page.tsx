import { Button } from '@/components/ui/button'
import {
  BarChart3,
  ChevronDown,
  CircleHelp,
  FileText,
  Home,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Mic,
  MoreHorizontal,
  Pause,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  StopCircle,
  Upload,
  Users,
  Workflow,
} from 'lucide-react'

// You can populate these from props, context, or an API later
const navGroups = [
  {
    label: 'Workspace',
    items: [
      { label: 'Home', icon: Home },
      { label: 'Live Call', icon: Phone, active: true },
      { label: 'Transcripts', icon: FileText },
      { label: 'Customers', icon: Users },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Analytics', icon: BarChart3 },
      { label: 'Sales Pipeline', icon: Workflow },
    ],
  },
]

// Empty transcript – replace with real messages when available
const transcript: {
  initials: string
  name: string
  time: string
  text: string
  tone: 'dark' | 'light'
}[] = []

function Logo() {
  return (
    <div className="flex items-center gap-2.5 px-1">
      <div className="flex size-8 items-center justify-center rounded-[10px] bg-[#5C3D24] text-lg font-semibold text-[#FAF7F1]">
        O
      </div>
      <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#3D2A1D]">
        Owlbridge
      </span>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="flex w-[240px] shrink-0 flex-col border-r border-[#E5DDD2] bg-[#F8F4EE] px-4 py-5">
      <Logo />
      <div className="my-6 h-px bg-[#E5DDD2]" />
      <nav className="flex flex-1 flex-col gap-7" aria-label="Main navigation">
        {navGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9B8D7D]">
              {group.label}
            </p>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-3 rounded-[9px] px-3 py-2 text-[13px] font-medium transition-colors ${
                      item.active
                        ? 'bg-[#5C3D24] text-[#FFFDF9]'
                        : 'text-[#75695C] hover:bg-[#EFE8DE] hover:text-[#3D2A1D]'
                    }`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    <Icon className="size-4" strokeWidth={1.8} />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="flex flex-col gap-1 border-t border-[#E5DDD2] pt-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-[9px] px-3 py-2 text-[13px] font-medium text-[#75695C] hover:bg-[#EFE8DE]"
        >
          <Settings className="size-4" strokeWidth={1.8} />
          Settings
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-[9px] px-3 py-2 text-[13px] font-medium text-[#75695C] hover:bg-[#EFE8DE]"
        >
          <CircleHelp className="size-4" strokeWidth={1.8} />
          Help
        </a>
        <div className="mt-3 flex items-center gap-3 border-t border-[#E5DDD2] px-2 pt-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#D8C7B2] text-xs font-semibold text-[#5C3D24]">
            AM
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-semibold text-[#3D2A1D]">
              Alex Morgan
            </p>
            <p className="text-[11px] text-[#9B8D7D]">Account executive</p>
          </div>
          <MoreHorizontal className="size-4 text-[#9B8D7D]" />
        </div>
      </div>
    </aside>
  )
}

function Topbar() {
  return (
    <header className="flex min-h-[76px] items-center justify-between border-b border-[#E5DDD2] bg-[#FFFDF9] px-8">
      <div>
        <h1 className="text-[20px] font-semibold tracking-[-0.03em] text-[#3D2A1D]">
          Live Call
        </h1>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-[#9B8D7D]">
          <span>Workspace</span>
          <span>/</span>
          <span className="text-[#75695C]">Live Call</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <label className="flex h-9 w-[220px] items-center gap-2 rounded-[9px] border border-[#E5DDD2] bg-[#FAF7F1] px-3 text-[#9B8D7D] focus-within:border-[#B99A79]">
          <Search className="size-4" strokeWidth={1.8} />
          <span className="sr-only">Search</span>
          <input
            className="w-full bg-transparent text-xs text-[#3D2A1D] outline-none placeholder:text-[#AA9F92]"
            placeholder="Search workspace"
          />
        </label>
        <ShieldCheck
          className="size-[19px] text-[#80664D]"
          strokeWidth={1.7}
          aria-label="Privacy protected"
        />
        <div className="flex size-8 items-center justify-center rounded-full bg-[#5C3D24] text-[11px] font-semibold text-white">
          AM
        </div>
      </div>
    </header>
  )
}

function WaveformPlaceholder() {
  // Minimal static waveform just for layout; no fake “live” heights
  const bars = Array.from({ length: 24 }, (_, i) => 18 + (i % 3) * 4)
  return (
    <div
      className="flex h-16 items-center justify-center gap-[3px]"
      aria-label="Audio waveform placeholder"
    >
      {bars.map((height, index) => (
        <span
          key={index}
          className="w-[3px] rounded-full bg-[#BBA994]"
          style={{ height }}
        />
      ))}
    </div>
  )
}

function RecorderPanel() {
  // Replace fake recording state with a neutral “no active call” UI
  return (
    <section className="flex min-h-[610px] flex-1 flex-col rounded-[11px] border border-[#E1D7C9] bg-[#FFFDF9] p-6 shadow-[0_2px_8px_rgba(92,61,36,0.03)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9B8D7D]">
            Workspace
          </p>
          <h2 className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-[#3D2A1D]">
            Call Recorder
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C7B2] bg-[#FBF4EA] px-2.5 py-1 text-[11px] font-medium text-[#80664D]">
          <span className="size-1.5 rounded-full bg-[#B77642]" />
          Ready
        </span>
      </div>

      <div className="mt-6 flex rounded-[9px] border border-[#E5DDD2] bg-[#F8F4EE] p-1">
        <button className="flex-1 rounded-[7px] bg-[#FFFDF9] py-2 text-xs font-semibold text-[#5C3D24] shadow-sm">
          Record
        </button>
        <button className="flex-1 rounded-[7px] py-2 text-xs font-medium text-[#9B8D7D]">
          Upload
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center py-8">
        <p className="text-xs text-[#9B8D7D]">No active call</p>
        <div className="mt-6 w-full max-w-md opacity-60">
          <WaveformPlaceholder />
        </div>
        <p className="mt-3 text-[11px] text-[#B0A396]">
          Start a call to begin recording
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 border-t border-[#E5DDD2] pt-5">
        <label className="flex flex-col gap-2 text-[11px] font-medium text-[#75695C]">
          Customer name
          <input
            className="h-9 rounded-[8px] border border-[#E5DDD2] bg-[#FFFCF8] px-3 text-xs text-[#3D2A1D] outline-none placeholder:text-[#B0A396]"
            placeholder="Enter name"
          />
        </label>
        <label className="flex flex-col gap-2 text-[11px] font-medium text-[#75695C]">
          Company
          <input
            className="h-9 rounded-[8px] border border-[#E5DDD2] bg-[#FFFCF8] px-3 text-xs text-[#3D2A1D] outline-none placeholder:text-[#B0A396]"
            placeholder="Enter company"
          />
        </label>
        <label className="flex flex-col gap-2 text-[11px] font-medium text-[#75695C]">
          Phone
          <input
            className="h-9 rounded-[8px] border border-[#E5DDD2] bg-[#FFFCF8] px-3 text-xs text-[#3D2A1D] outline-none placeholder:text-[#B0A396]"
            placeholder="Enter phone"
          />
        </label>
      </div>

      <div className="mt-5 flex gap-3">
        <Button
          variant="outline"
          className="h-10 flex-1 border-[#D8C7B2] bg-transparent text-[#5C3D24] hover:bg-[#F8F4EE]"
        >
          <Pause data-icon="inline-start" />
          Pause
        </Button>
        <Button className="h-10 flex-1 bg-[#5C3D24] text-[#FFFDF9] hover:bg-[#46301E]">
          <StopCircle data-icon="inline-start" />
          Stop
        </Button>
      </div>
    </section>
  )
}

function TranscriptPanel() {
  return (
    <section className="flex min-h-[610px] flex-1 flex-col rounded-[11px] border border-[#E1D7C9] bg-[#FFFDF9] p-6 shadow-[0_2px_8px_rgba(92,61,36,0.03)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9B8D7D]">
            Conversation
          </p>
          <h2 className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-[#3D2A1D]">
            Live Transcript
          </h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-[#E5DDD2] text-[#75695C]"
        >
          Export
          <ChevronDown data-icon="inline-end" />
        </Button>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-[8px] border border-[#E5DDD2] bg-[#FAF7F1] px-3 py-2 text-[11px] text-[#80664D]">
        <Inbox className="size-3.5" />
        Transcript updates automatically as you speak
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-3 overflow-hidden">
        {transcript.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-[9px] border border-dashed border-[#E5DDD2] bg-[#FCFAF6]">
            <p className="text-xs text-[#9B8D7D]">
              No transcript yet. Start speaking to see live captions.
            </p>
          </div>
        ) : (
          transcript.map((message) => (
            <article
              key={message.time}
              className="rounded-[9px] border border-[#E5DDD2] bg-[#FCFAF6] p-3.5"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex size-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                    message.tone === 'dark'
                      ? 'bg-[#5C3D24] text-white'
                      : 'bg-[#E6D8C8] text-[#5C3D24]'
                  }`}
                >
                  {message.initials}
                </div>
                <p className="text-xs font-semibold text-[#3D2A1D]">
                  {message.name}
                </p>
                <span className="text-[11px] text-[#AA9F92]">
                  {message.time}
                </span>
              </div>
              <p className="mt-2.5 pl-9 text-[12px] leading-[1.55] text-[#75695C]">
                {message.text}
              </p>
            </article>
          ))
        )}
      </div>

      <div className="mt-5 flex gap-3">
        <Button
          variant="outline"
          className="h-10 flex-1 border-[#D8C7B2] text-[#5C3D24] hover:bg-[#F8F4EE]"
        >
          <Sparkles data-icon="inline-start" />
          Polish with AI
        </Button>
        <Button className="h-10 flex-1 bg-[#5C3D24] text-[#FFFDF9] hover:bg-[#46301E]">
          <Upload data-icon="inline-start" />
          Send to CRM
        </Button>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main className="flex min-h-screen bg-[#FFFDF9] text-[#3D2A1D]">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Topbar />
        <div className="p-8">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <h2 className="text-[25px] font-semibold tracking-[-0.04em] text-[#3D2A1D]">
                Good morning, Alex
              </h2>
              <p className="mt-1 text-sm text-[#9B8D7D]">
                Capture the conversation, then keep your customer record up to
                date.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#9B8D7D]">
              <ShieldCheck className="size-4 text-[#80664D]" />
              Privacy protected
            </div>
          </div>

          <div className="flex items-stretch gap-6">
            <RecorderPanel />
            <TranscriptPanel />
          </div>
        </div>
      </div>
    </main>
  )
}